import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.x = 10;
camera.position.y = 8;
// camera.lookAt(mesh.position);
camera.position.z = 3;
// scene.add(camera);

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

// Create a renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});

renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// instantiate a loader
// const loader = new THREE.MaterialLoader();

// Create a sphere
// const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
// const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
// scene.add(sphere);

const size = 10;
const divisions = 10;
const gridHelper = new THREE.GridHelper( size, divisions ); scene.add( gridHelper );












// planeGeometry
// const ancho = 18;
// const alto = 14;
// const segmentosPlano = 10;

// const geometriaPlano = new THREE.PlaneGeometry(
//   ancho,
//   alto,
//   segmentosPlano,
//   segmentosPlano
// );

// crear material
// const material = new THREE.MeshBasicMaterial({
//   color: 0x2E7D32,
//   side: THREE.DoubleSide,
// });

//crear una malla
// const plano = new THREE.Mesh(geometriaPlano, material);
// plano.rotation.x = -Math.PI * 0.5;
// plano.position.y = 0.5;
// scene.add(plano);


// Función para crear un árbol
// function crearArbol(x, y, z) {
//   const troncoGeometry = new THREE.BoxGeometry(1, 4, 1);
//   const troncoMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
//   const tronco = new THREE.Mesh(troncoGeometry, troncoMaterial);
//   tronco.position.set(x, y, z);

//   const hojasGeometry = new THREE.BoxGeometry(3, 3, 3);
//   const hojasMaterial = new THREE.MeshBasicMaterial({ color: 0x004000 });
//   const hojas = new THREE.Mesh(hojasGeometry, hojasMaterial);
//   hojas.position.set(x, y + 1, z);

//   const hojasGeometryTop = new THREE.BoxGeometry(2, 2, 2);
//   const hojasMaterialTop = new THREE.MeshBasicMaterial({ color: 0x004000 });
//   const hojasTop = new THREE.Mesh(hojasGeometryTop, hojasMaterialTop);
//   hojasTop.position.set(x, y + 2, z);

// Aplicar escala al tronco y las hojas
//   tronco.scale.set(0.5, 0.5, 0.5);
//   hojas.scale.set(0.5, 0.5, 0.5);
//   hojasTop.scale.set(0.5, 0.5, 0.5);

//   const arbol = new THREE.Group();
//   arbol.add(tronco);
//   arbol.add(hojas);
//   arbol.add(hojasTop);
  
//   scene.add(arbol);
// }


// Crear tres árboles
// crearArbol(-3, 1.5, 2);
// crearArbol(4, 1.5, -2);
// crearArbol(4, 1.5, 3);
// crearArbol(-4.5, 1.5, -2);

// Función para crear una piedra alta
// function crearPiedraAlta(x, y, z, altura) {
//   const piedraGeometry = new THREE.BoxGeometry(1, altura, 2);
//   const tonoGris = Math.random() * 0.2 + 0.2;
//   const piedraMaterial = new THREE.MeshBasicMaterial({ color: new THREE.Color(tonoGris, tonoGris, tonoGris) });
//   const piedra = new THREE.Mesh(piedraGeometry, piedraMaterial);
//   piedra.position.set(x, y, z);

//   scene.add(piedra);
// }

// Función para crear una cascada
// function crearCascada(x, y, z, altura) {
//   const cascadaGeometry = new THREE.BoxGeometry(0.2, altura, 3);
//   const aguaMaterial = new THREE.MeshBasicMaterial({ color: 0x00bfff, transparent: true, opacity: 0.8 });
//   const cascada = new THREE.Mesh(cascadaGeometry, aguaMaterial);
//   cascada.position.set(x, y, z);
//   cascada.rotation.set(0, Math.PI / 2, 0);

//   scene.add(cascada);
// }

// Crear piedras altas
// crearPiedraAlta(-2, 3, -1, 6); // Primera piedra alta
// crearPiedraAlta(2, 3, -1, 6); // Segunda piedra alta

// // Colocar la cascada entre las piedras
// crearCascada(0, 3, 0, 6); // Cascada en medio de las piedras

// // Función para crear el plano de agua
// function crearPlanoAgua() {
//   const planoGeometry = new THREE.PlaneGeometry(3.5, 4); // Ajusta el tamaño según sea necesario
//   const aguaMaterial = new THREE.MeshBasicMaterial({ color: 0x00bfff, transparent: true, opacity: 0.8 }); // Color azul claro transparente
//   const planoAgua = new THREE.Mesh(planoGeometry, aguaMaterial);
//   planoAgua.rotation.x = -Math.PI / 2; // Rota el plano para que esté horizontal
//   planoAgua.position.y = 0.6; // Ajusta la posición en y según sea necesario
//   planoAgua.position.z = 2;
//   scene.add(planoAgua);
// }

// Llamada a la función para crear el plano de agua
// crearPlanoAgua();

// Render the scene
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
