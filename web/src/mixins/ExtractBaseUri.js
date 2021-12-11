export default {
    data() {
        return {
            baseUri: '',   
        };
    },
    mounted() {
        const dataUri = document.querySelector('input[data-uri]'); 
        if (!dataUri) return;
    
        this.baseUri = dataUri.getAttribute('data-uri');
    },
}