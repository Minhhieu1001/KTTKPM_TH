package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprint(w, "Hello, Docker Go!")
	})

	const port = ":8080"
	log.Printf("Server is running at http://localhost%s", port)
	log.Fatal(http.ListenAndServe(port, nil))
}
