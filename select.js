export class Select {
    constructor({id, title, data}) {
        this.element = document.getElementById(id);
        this.input = this.element.children[0];
        this.options = this.element.children[1];
        this.title = title;
        this.data = data;
        this.init();
    }

    init() {
        this.initTitle();
        this.initInput();
        this.initOptions();
    }

    initTitle() {
        const title = document.createElement('h2');
        title.innerText = this.title;
        this.element.insertBefore(title, this.element.childNodes[0]);
    }

    initInput() {
        const selectedOption = this.data.filter((option) => option.selected)[0];
        this.input.value = selectedOption.value;
    }

    initOptions() {
        let option;
        this.data.forEach((optionData) => {
            option = document.createElement('li');
            if (optionData.selected) option.classList.add('selected');
            option.addEventListener('click', () => this.onSelect(optionData.id));
            option.innerText = optionData.value;
            this.options.appendChild(option);
        }); 
    }

    onSelect(id) {
        this.setSelected(id);
        this.initInput();
        this.options.innerHTML = '';
        this.initOptions();
    }

    setSelected(id) {
        this.data = this.data.map(value => {
            delete value['selected'];
            if (value.id === id) {
                value.selected = true;
            }
            return value;
        });
    }

    getSelected() {
        return this.data.filter(value => value.selected)[0];
    }

}