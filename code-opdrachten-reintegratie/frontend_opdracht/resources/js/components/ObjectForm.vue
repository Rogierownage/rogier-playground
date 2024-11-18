<template>
    <form v-on:submit.prevent="addItem">
        <p>Start date: <VueDatePicker v-model="startDate"></VueDatePicker></p>
        <p>End date: <VueDatePicker v-model="endDate"></VueDatePicker></p>
    </form>

    <p>{{startDate}}</p>
    <p>{{endDate}}</p>
    <p><v-select :options="availableObjects" :reduce="object => object.name" label="Object: " v-model="selectedObject" /></p>
</template>

<script>
export default {
    props: {
        availableObjects: {
            type: Array,
            // Normally this list would be supplied by the back-end as a prop.
            default: [
                {id: 1, name: 'Batterij 1'},
                {id: 2, name: 'Batterij 2'},
                {id: 3, name: 'Heftruck 1'},
                {id: 4, name: 'Heftruck 2'},
            ]
        }
    },
    data() {
        return {
            startDate: null,
            endDate: null,
            selectedObject: null,
        }
    },
    watch: {
        startDate(){
            this.handleFormChange();
        },
        endDate(){
            this.handleFormChange();
        },
        selectedObject(){
            this.handleFormChange();
        },
    },
    methods: {
        handleFormChange() {
            console.log(['Form changed', this.startDate, this.endDate. this.selectedObject]);

            if(this.startDate && this.endDate && this.selectedObject && this.endDate.valueOf() > this.startDate.valueOf()){
                console.log('Should do api call here');
            }
        },
    },
};
</script>

<style></style>
