# Tr

## ZoomableImage Class

Bu JavaScript sınıfı, bir resmi yakınlaştırma (zoom in) ve uzaklaştırma (zoom out) yapabilen, sürüklenebilir bir şekilde hareket ettirebilen ve belirli bir sınırlama içinde tutabilen bir özellikler kümesini sunar.

### Kullanım

Bu sınıfı projenize dahil etmek için aşağıdaki adımları izleyebilirsiniz:

1. Projenize `ZoomableImage.js` dosyasını ekleyin.

2. Aşağıdaki örnek kodu kullanarak sınıfı projenizde kullanabilirsiniz:

```javascript
// ZoomableImage sınıfını projeye dahil et
const zoomableImage = new ZoomableImage("resim.jpg", "800px", "600px", "zoomed-container", document.body);

// Sınıfın öğelerini al
const [container, imgDiv, img, zoomInButton, zoomOutButton] = zoomableImage.getElements();

// Belirli bir elemente ekle
document.getElementById("my-container").appendChild(container);
```

# Eng

## ZoomableImage Class

This JavaScript class provides a set of features that allow you to zoom in, zoom out, drag, and confine an image within specific boundaries.

### Usage

To include this class in your project, follow these steps:

1. Add the `ZoomableImage.js` file to your project.

2. Use the following example code to use the class in your project:

```javascript
// Include the ZoomableImage class in the project
const zoomableImage = new ZoomableImage("image.jpg", "800px", "600px", "zoomed-container", document.body);

// Get the elements of the class
const [container, imgDiv, img, zoomInButton, zoomOutButton] = zoomableImage.getElements();

// Append to a specific element
document.getElementById("my-container").appendChild(container);
```
