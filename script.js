var app = new Vue({
    el: '#app',
    data: {
        number: 1234,
        words: null,
        translations: ['en', 'np'],
        selectedTranslation: 'np'
    },

    methods: {
    },

    mounted() {
        this.$refs.numberInput.focus();
    },

    computed: {
        computedWords() {
            return mapToWords(this.number, this.selectedTranslation);
        }
    }
});