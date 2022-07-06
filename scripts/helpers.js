
/*
https://www.w3schools.com/howto/howto_html_include.asp 

I wanted to put the content for each tab in seperate "views".*/
export async function includeHTML() {
    // var documentElements
    // var pageElement
    // var incFile
    // var xhttp

    /* Loop through a collection of all HTML elements: */
    let documentElements = document.getElementsByTagName("*")

    for (let i = 0; i < documentElements.length; i++) {
        let pageElement = documentElements[i]

        /*search for elements with a certain atrribute:*/
        let incFile = pageElement.getAttribute("w3-include-html")

        if (incFile) {
            let promise = new Promise(function(resolve) {
                /* Make an HTTP request using the attribute value as the file name: */
                let request = new XMLHttpRequest()
                request.open("GET", incFile)

                request.onload = function() {
                    if (request.status == 200) {
                        pageElement.innerHTML = request.responseText
                    }

                    if (this.status == 404) {
                        pageElement.innerHTML = "Page not found."
                    }
                }
                
                request.send()
            })

            pageElement.innerHTML = await promise;
            pageElement.removeAttribute("w3-include-html")
        }
    }
}