export function post_json(url: string, payload: Object, auth_token: string | undefined): Promise<any> {
	return json_req_promise(url, "POST", payload, auth_token);
}

export function get_json(url: string, auth_token: string | undefined): Promise<any> {
	return json_req_promise(url, "GET", undefined, auth_token);
}

export function json_req_promise(url: string, method: string, payload: object | undefined, auth_token: string | undefined): Promise<any> {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		if (auth_token) {
			if (!url.includes("?")) url += "?";
			url += "&jwt=" + auth_token;
		}
		xhr.open(method, url, true);
		if (payload) {
			const payload_string = JSON.stringify(payload);
			xhr.send(payload_string);
		} else {
			xhr.send();
		}
		xhr.onerror = () => {
			throw Object({ resp_code: 0, msg: "Could not connect to server!" });
		};
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				if (xhr.status === 401) {
					window.location.href = "/login?source=" + encodeURIComponent(window.location.href);
				}
				if (xhr.status === 403) {
					window.location.href = "/";
				}
				if (xhr.status === 302) {
					window.location.href = xhr.responseText;
				}
				if (xhr.status === 200) {
					// xhr finished successfully
					const resp = xhr.responseText;
					const resp_json = JSON.parse(resp);
					resolve(resp_json);
				} else {
					// xhr failed
					reject(Object({ resp_code: xhr.status, msg: xhr.responseText }));
				}
			}
		};
	});
}
