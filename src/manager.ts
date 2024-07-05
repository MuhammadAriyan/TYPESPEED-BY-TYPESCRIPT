import { User } from './index.js';
import chalkAnimation from 'chalk-animation';
export class UserManager {
    public users: User[] = []; 
    
    registerUser(username: string, password: string): boolean {
        for (let user of this.users) {
            if (user.username === username) {
                chalkAnimation.karaoke("Username already exists.");
                setTimeout(()=>{
                return process.exit(0)
                },1000)
            }
        }

        let newUser = new User(username, password);
        this.users.push(newUser);
        console.log(`User ${username} registered successfully.`);
        return true;
    }

    loginUser(username: string, password: string){
        for (let user of this.users) {
            if (user.username === username && user.password === password) {
                console.log(`User ${username} logged in successfully.`);
                return true;
            }
        }
        chalkAnimation.karaoke("Invalid username or password.");
        setTimeout(()=>{
        return process.exit(0)
        },1000)
    }
}


