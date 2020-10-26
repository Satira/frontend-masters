// import popmotion from "popmotion";
//
// // code taken from one of the examples on popmotion.io
// const ball = document.querySelector(".box");
// const divStyler = popmotion.styler(ball);
// const ballXY = popmotion.value({ x: 0, y: 0 }, divStyler.set);
//
// popmotion.listen(ball, "mousedown touchstart").start(e => {
//     e.preventDefault();
//     popmotion.pointer(ballXY.get()).start(ballXY);
// });
//
// popmotion.listen(document, "mouseup").start(() => {
//     popmotion
//         .spring({
//             from: ballXY.get(),
//             velocity: ballXY.getVelocity(),
//             to: { x: 0, y: 0 },
//             stiffness: 200
//         })
//         .start(ballXY);
// });

x = 2;
y = 3;
z = 4;

let a = [
    x,
    y,
    z
];

for (i = 0; i < a.length; i++) {
    console.log(a[i]);
}