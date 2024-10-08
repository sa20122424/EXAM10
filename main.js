async function salom() {
    try {
        let soychilik = await fetch('https://raw.githubusercontent.com/diyor011/apibest/master/api.json');
        let soy = await soychilik.json();
        console.log(soy);

        const body = document.querySelector("body");

     
        let filterContainer = document.createElement('div');
   filterContainer.style.display = "flex"
   filterContainer.style.alignItems = "center"
   filterContainer.style.justifyContent = "center"
   filterContainer.style.width = "1500px"

        let filterInput = document.createElement('input'); 
        filterInput.placeholder = 'Search...';

       
        filterContainer.append(filterInput);
        
        body.append(filterContainer);

        const boxes = [];

        soy.forEach(e => {
            let box = document.createElement('div');
            let p = document.createElement("p");
            p.innerHTML = e.name;
            let img = document.createElement('img');
            img.src = e.pic;
            img.style.width = "200px";
            let opisaniy = document.createElement("p");
            opisaniy.innerHTML = e.fulldesc;
            let price = document.createElement("p");
            price.innerHTML = `${e.price} $`;
            box.classList = "box";
            box.append(img, p, opisaniy, price);
            body.append(box);

            boxes.push(box);
        });

        filterInput.addEventListener('input', function () {
            let filterValue = filterInput.value.toLowerCase();

            boxes.forEach(box => {
                let name = box.querySelector('p').textContent.toLowerCase();
                box.style.display = name.includes(filterValue) ? 'block' : 'none';
            });
        });

    } catch (error) {
        console.error(error);
    }
}

salom();
