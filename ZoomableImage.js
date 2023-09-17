class Zoomed {
    constructor(img, w, h, id, scaleDown = false) {
        // Create container
        this.elemet = document.createElement("div");
        this.elemet.style.width = w;
        this.elemet.style.height = h;
        this.elemet.id = id;

        // Create img container div
        this.imgDiv = document.createElement("div");
        this.imgDiv.style.width = "100%";
        this.imgDiv.style.height = "100%";
        this.imgDiv.style.overflow = "hidden";

        // create img
        this.Img = document.createElement("img");
        if (scaleDown) {
            this.Img.style.width = "100%";
            this.Img.style.height = "100%";
        }
        this.Img.style.transformOrigin = "0 0"; // Resmi ortala
        this.Img.style.transform = "scale(1)";
        this.Img.style.cursor = "grab";
        this.Img.src = img;

        // create zoom and out buttons
        this.zoomInButton = document.createElement("button");
        this.zoomOutButton = document.createElement("button");
        this.zoomInButton.innerText = "+";
        this.zoomOutButton.innerText = "-";

        // appendChild 
        this.imgDiv.appendChild(this.Img);
        this.elemet.appendChild(this.imgDiv);
        this.elemet.appendChild(this.zoomInButton);
        this.elemet.appendChild(this.zoomOutButton);

        // Create event listeners
        // zoom in and out
        this.currentScale = 1;
        this.zoomInButton.addEventListener('click', () => this.zoomInOut(1.1));
        this.zoomOutButton.addEventListener('click', () => this.zoomInOut(0.9));
        this.Img.addEventListener("wheel", (e) => this.zoomInOut(0, e));
        // grap and draggable
        this.isDragging = false; this.startX = 0; this.startY = 0; this.scrollLeft = 0; this.scrollTop = 0;
        this.Img.addEventListener('mousedown', (e) => this.startGrabbing(e));
        this.Img.addEventListener('mouseup', () => this.stopGrabbing());
        this.Img.addEventListener('mouseleave', () => this.stopGrabbing());
        this.Img.addEventListener('mousemove', (e) => this.moveImg(e));
    }

    getElements = () => [this.elemet, this.imgDiv, this.Img, this.zoomInButton, this.zoomOutButton];

    zoomInOut(Scale, e) {
        Scale = Scale == 0 ? (e?.deltaY > 0 ? 0.9 : 1.1) : Scale;
        // console.log(Scale)
        this.currentScale *= Scale;
        if (this.currentScale <= 1) this.currentScale = 1;
        // console.log(this.currentScale);  
        this.Img.style.transform = `scale(${this.currentScale})`;
    }

    startGrabbing(e) {
        e.preventDefault();
        this.isDragging = true;
        this.startX = e.clientX - this.imgDiv.getBoundingClientRect().left;
        this.startY = e.clientY - this.imgDiv.getBoundingClientRect().top;
        this.scrollLeft = this.imgDiv.scrollLeft;
        this.scrollTop = this.imgDiv.scrollTop;
        this.Img.style.cursor = 'move';
    }

    stopGrabbing() {
        this.isDragging = false;
        this.Img.style.cursor = 'grab';
    }

    moveImg(e) {
        e.preventDefault();
        if (!this.isDragging) return;
        const x = e.clientX - this.imgDiv.getBoundingClientRect().left;
        const y = e.clientY - this.imgDiv.getBoundingClientRect().top;
        const deltaX = x - this.startX;
        const deltaY = y - this.startY;
        this.imgDiv.scrollLeft = this.scrollLeft - deltaX;
        this.imgDiv.scrollTop = this.scrollTop - deltaY;
    }
}
