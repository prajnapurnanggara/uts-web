const app = Vue.createApp({
    data() {
        return {
            nis: '',
            nama: '',
            editedData: null,
            datas: [
                
            ]
        }
    },

    methods: {
        submit(){
            if(this.nis.length === 0) return;

            if(this.editedData === null){
                this.datas.push({
                    nis: this.nis,
                    nama: this.nama
                });
            }
            else{
                this.datas[this.editedData].nis = this.nis;
                this.datas[this.editedData].nama = this.nama;
                this.editedData = null;
            }

            this.nis = '';
            this.nama = '';
        },

        deleteData(index){
            this.datas.splice(index, 1);
        },

        editData(index){
            this.nis = this.datas[index].nis;
            this.nama = this.datas[index].nama;
            this.editedData = index;
        },
    }
})