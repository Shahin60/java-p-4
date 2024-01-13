
function takeWork(name,age,task) {
    console.log('your',name);
    console.log('your age',age);
   task();
}
function work() {
    console.log('take a wash');
}
function shower() {
    console.log('take a shower')
}
takeWork( 'Shahin', 21,work );
takeWork( 'walid',20,shower);