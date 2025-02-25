<template>
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-3">
        <div class="bg-white rounded-lg overflow-hidden shadow-lg w-full max-w-lg">
            <div class="px-4 py-3 border-b border-gray-200">
                <h5 class="text-lg font-semibold">{{ item.ideaTitle }}</h5>
            </div>
            <div class="p-4">
                <img v-if="item.ideaBrandIconUrl" :src="item.ideaBrandIconUrl" class="img-fluid rounded mb-3 w-10" />
                <p class="font-bold">{{ item.ideaBrandName }}</p>
                <p>{{ item.ideaDescription }}</p>
            </div>
            <div class="px-4 py-3 border-t border-gray-200 flex justify-end space-x-2">
                <button type="button" class="btn btn-secondary bg-gray-500 text-white py-2 px-4 rounded" @click="closeModal">Close</button>
                <button type="button" class="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded">Vote</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'IdeaModal',
    props: ['item', 'show'],
    methods: {
        closeModal() {
            this.$emit('close');
        }
    }
};
</script>
