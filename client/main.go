package main 


import (
	"fmt"
	"html/template"
	"net/http"
)


func index(w http.ResponseWriter, r *http.Request) {
	t := template.Must(template.ParseFiles("index.html"))
	t.Execute(w, nil)
}

func main() {

	http.HandleFunc("/", index)
	fmt.Println("Servidor corriendo en el puerto: 8100")
	http.ListenAndServe(":8100", nil)
}