package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/index.html")
	})
	http.HandleFunc("/arch.svg", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "static/arch.svg")
	})

	http.HandleFunc("/status/live", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Live"))
	})

	fmt.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", nil)
}
