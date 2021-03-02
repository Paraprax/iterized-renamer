files = ['screenshot sdlkafjads;klf', 'screenshot 23543qrf', 'screenshot sadf4325', 'screenshot jk342l;s;klf', 'screenshot 4jkl;ewayz45rtk'];

console.log(files);

const renamer = (array, newname) => {
    /*
        - take in all the files in a directory
    */
    for (var i = 1; i < array.length; i++) {
        array[i] = `${newname}-${i}`;
    }
    console.log(array);
}

renamer(files, 'seshead');

