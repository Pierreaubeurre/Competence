function passer() {//lit le tableau passer

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch("http://10.0.52.198:8055/items/Passer?access_token="+document.cookie, requestOptions)
        .then(response => response.text())
        .then(result => {


            resp = JSON.parse(result).data;

            lecture(resp);

        })
        .catch(error => console.log('error', error));
    
}

function lecture(resp) {

    

}