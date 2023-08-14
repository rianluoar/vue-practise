const app = Vue.createApp({
    data() {
        return {
            courseGoalA: '<b>Finish the course and learn Vue!</b>',
            courseGoalB: 'Master Vue',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber<0.5) return this.courseGoalA;
            return this.courseGoalB;
        }
    }
});

app.mount('#user-goal');