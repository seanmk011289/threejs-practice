import * as THREE from "three";

const renderer = new THREE.WebGLRenderer({antialias:true});
let w = window.innerWidth;
let h = window.innerHeight;
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

let fov = 100;
let aspect = w/h;
let near = 0.1;
let far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;
camera.position.x = -1

const scene = new THREE.Scene();

const geo = new THREE.IcosahedronGeometry(1.0, 4);
const mat = new THREE.MeshStandardMaterial({
    color:0xFFffff,
    // metalness:0.9,
    flatShading: true
})
const mesh1 = new THREE.Mesh(geo, mat);
mesh1.position.set(0, 0, 0)
scene.add(mesh1);

const mesh2 = new THREE.Mesh(geo, mat);
mesh2.position.set(-5, 0, -4)
scene.add(mesh2);

const wiremat = new THREE.MeshBasicMaterial({
    color:0xffffff,
    wireframe: true
})

const wiremesh1 = new THREE.Mesh(geo, wiremat);
wiremesh1.scale.setScalar(1.01);
mesh1.add(wiremesh1);

const wiremesh2 = new THREE.Mesh(geo, wiremat);
wiremesh2.scale.setScalar(1.01);
mesh2.add(wiremesh2);

// const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.1);
// scene.add(directionalLight);

const hemiLight = new THREE.HemisphereLight(0x0000FF, 0xFFA500);
scene.add(hemiLight);

function animate(t=0) {
    requestAnimationFrame(animate);
    // mesh.scale.setScalar(Math.cos(t * 0.001))
    mesh1.rotation.y = t * 0.0001;
    mesh2.rotation.y = t * 0.0004;
    renderer.render(scene, camera);
    console.log(Math.cos(t * 0.001));
}

animate();

