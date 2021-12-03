function load(){
    return {
        baseUrl: "http://www.tiendaamyd.com",
        formCotiza: {
            name: '',
            dni: '',
            phone: '',
            email: '',
            detail: '',
        },
        formContact: {
            name: '',
            email: '',
            dni: '',
            phone: '',
            company: '',
            subject: '',
            message: '',
        },
        modalCotiza: null,
        openCotizaModal(){
            this.modalCotiza.modal('show');
        },
        onInit(){
            this.modalCotiza = $('#request-model').modal('hide');
        },
        sendFormCotiza(){
            Swal.showLoading();
            let resp = fetch(`${this.baseUrl}/api/sendEmailCotiza`, {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                referrerPolicy: "no-referrer",
                body: JSON.stringify(this.formCotiza),
            })
            .then((response) => response.json())
            .then(r => {
                Swal.fire('Hemos recibido tu mensaje', 'Nos contactaremos contigo a la brevedad','success')
            })
            .catch(error => {
                console.log(error)
                Swal.fire('Algo salió mal', 'Inténtalo de nuevo más tarde','error')
            })
            .finally(() => {
                this.formCotiza = {
                    name: '',
                    dni: '',
                    phone: '',
                    email: '',
                    detail: '',
                };
                this.modalCotiza.modal('hide')
            });
        },
        sendFormContact(){
            Swal.showLoading();
            let resp = fetch(`${this.baseUrl}/api/sendEmailContact`, {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
                referrerPolicy: "no-referrer",
                body: JSON.stringify(this.formContact),
            })
            .then((response) => response.json())
            .then(r => {
                Swal.fire('Hemos recibido tu mensaje', 'Nos contactaremos contigo a la brevedad','success')
                this.formContact = {
                    name: '',
                    email: '',
                    dni: '',
                    phone: '',
                    company: '',
                    subject: '',
                    message: '',
                };
            })
            .catch(error => {
                console.log(error)
                Swal.fire('Algo salió mal', 'Inténtalo de nuevo más tarde','error')
            });
        },
    }
}