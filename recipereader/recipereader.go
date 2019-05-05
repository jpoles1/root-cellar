package recipereader

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

"github.com/chromedp/chromedp"
)

func FetchPage() {
	// create context
	ctx, cancel := chromedp.NewContext(context.Background())
	defer cancel()

	// run task list
	var res string
	err := chromedp.Run(ctx,
		chromedp.Navigate(`https://www.allrecipes.com/recipe/123259/chicken-noodle-stir-fry/`),
		chromedp.Text(`body`, &res, chromedp.NodeVisible, chromedp.ByID),
	)
	if err != nil {
		log.Fatal(err)
	}

	log.Println(strings.TrimSpace(res))
}
func FetchURL() {
	recipeURL := "https://www.allrecipes.com/recipe/123259/chicken-noodle-stir-fry/"
	res, err := http.Get(recipeURL)
	if err != nil {
		log.Fatal(err)
	}
	robots, err := ioutil.ReadAll(res.Body)
	res.Body.Close()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("%s", robots)
}
