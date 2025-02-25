<template>
    <div style="height: 100vh;">
        <div class="container">
            <form>
                <div class="mt-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Brand Name</label>
                    <input type="text" class="form-control" id="brand" aria-describedby="brand">
                </div>
                <div class="mt-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Brand Title</label>
                    <input type="text" class="form-control" id="brand" aria-describedby="brand">
                </div>
                <div class="mt-4 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Brand Image URL</label>
                    <input type="text" class="form-control" id="url" aria-describedby="url">
                </div>
                <div data-mdb-input-init class="form-outline mb-3">
                    <label class="form-label" for="textAreaExample">Message</label>
                    <textarea class="form-control" id="textAreaExample1" rows="4"></textarea>
                </div>

                <button type="submit" class="btn btn-secondary w-32 mr-2">Cancel</button>
                <button type="submit" class="btn btn-primary w-32">Post</button>
            </form>
        </div>
    </div>
    <FooterVue />
</template>

<script>
// import { useSuggessionStore } from '../stores/suggestionStore'
import FooterVue from './Footer.vue'
import { ref } from 'vue';
export default {
    name: 'Addsuggestion',
    components: {
        FooterVue,
    },
    // setup() {
    //     const suggestionStore = useSuggessionStore();
    //     const name = ref('');
    //     const message = ref('');

    //     const addSuggestion = () => {
    //         const suggestion = {
    //         title: name.value,
    //         text: message.value,
    //         };
    //         suggestionStore.addSuggestion(suggestion);
    //         name.value = '';
    //         message.value = '';
    //     };
    //     return {
    //         name,
    //         message,
    //         addSuggestion,
    //     };
    // },
};
</script>

<style scoped></style>