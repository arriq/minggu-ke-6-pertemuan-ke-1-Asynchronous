const seminar = 'mager';

const janjian = kondisi => new Promise((resolve, reject) => {
    if (kondisi == 'mager') {
        resolve('Saya tidak Mengikuti Seminar');
    } else {
        reject('Saya ingin ikut seminar');
    }
});
janjian(seminar)
    .then(res => console.log(res))
    .catch(err => console.error(err)); 