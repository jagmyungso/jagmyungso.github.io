export default {
    removeLineBreaks(inputHTML) {
        const result = inputHTML.toString().replace(/[\n\r\t]/gm, "").replace(/\s+/g, " ");
        return result;
    },
    createScript(id, inputFunction) {
        let elem = document.getElementById(id);
        if (!elem) {
            const script = this.removeLineBreaks(inputFunction);
            elem = document.createElement('script');
            elem.setAttribute('id', id);
            elem.innerText = script;
            document.body.appendChild(elem);
        }
    },
    createScriptSrc(id, src, crossorigin){
        let elem = document.getElementById(id);
        if (!elem) {
            elem = document.createElement('script');
            elem.setAttribute('id', id);
            elem.setAttribute('src', src);
            elem.setAttribute('crossorigin', crossorigin);
            elem.async = true;
            document.body.appendChild(elem);
        }
    },
    createScriptAutorun(id, inputFunction){
        let elem = document.getElementById(id);
        if (!elem) {
            const script = this.removeLineBreaks(inputFunction);
            elem = document.createElement('script');
            elem.setAttribute('id', id);
            elem.innerText = `(${script})()`;
            document.body.appendChild(elem);
        }
    }
}