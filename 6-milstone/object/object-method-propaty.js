const student = {
    name:'obaidul qader',
    id:101,
    subject:['english','bangla', 'islam'],
    friend:{
        name:'mirza fokhrul', subject:'bnp'
    },
    takeExam:function(){
        console.log(this.name,'taking exam')
    }
};
student.takeExam()

