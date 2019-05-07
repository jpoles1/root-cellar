var exports = {}

export function postJSON(url: string, payload: Object, authToken: string | undefined): Promise<any> {
	return jsonRequestPromise(url, "POST", payload, authToken)
}

export function getJSON(url: string, authToken: string | undefined): Promise<any> {
	return jsonRequestPromise(url, "GET", undefined, authToken)
}

export function jsonRequestPromise(url: string, method: string, payload: Object | undefined, authToken: string | undefined): Promise<[number, string]> {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest()
		if (authToken) {
			if (!url.includes("?")) url += "?"
			url += "&jwt=" + authToken
		}
		xhr.open(method, url, true)
		if (payload) {
			let payloadString = JSON.stringify(payload)
			xhr.send(payloadString)
		} else {
			xhr.send()
		}
		xhr.onerror = function () {
			throw Object({ "respCode": 0, "msg": "Could not connect to server!" })
		}
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status === 401) {
					window.location.href = "/login?source=" + encodeURIComponent(window.location.href)
				}
				if (xhr.status === 403) {
					window.location.href = "/"
				}
				if (xhr.status === 302) {
					window.location.href = xhr.responseText
				}
				if (xhr.status === 200) {
					// xhr finished successfully
					var resp = xhr.responseText
					var respJson = JSON.parse(resp)
					resolve(respJson)
				} else {
					// xhr failed
					throw Object({ "respCode": xhr.status, "msg": xhr.responseText })
				}
			}
		}
	})
}

export default exports
