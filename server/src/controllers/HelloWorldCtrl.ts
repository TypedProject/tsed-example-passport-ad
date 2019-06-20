import {Controller, Get} from "@tsed/common";
import {OAuthBearer} from "../decorators/OAuthBearer";

@Controller("/rest")
export class HelloWorldCtrl {

    @Get("/hello-world")
    @OAuthBearer()
    helloWorld() {
        return {text: "Hello world"};
    }

    @Get("/hello-auth")
    @OAuthBearer({"scopes": ["testerx"]})
    helloAuth() {
        return {text: "Authorised hello"};
    }
}
