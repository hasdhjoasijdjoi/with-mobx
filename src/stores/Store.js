import { observable, action } from "mobx";
import axios from "axios";

export default class Store {
  @observable payload = {};

  @observable email = "";

  @observable password = "";

  @observable confirmPassword = "";

  @observable name = "";

  @observable category = "";

  @observable title = "";

  @observable content = "";

  @observable currentID = "";

  @observable post = [];

  @observable index = 0;

  @observable search = "";

  @observable selectedPost = [];

  @action savePost = (id) => {
    this.post.concat(id);
  };

  @action saveID = (id) => {
    this.currentID = id;
  };

  @action setEmail = (event) => {
    this.email = event.currentTarget.value;
    console.log(this.email);
  };

  @action setPassword = (event) => {
    this.password = event.currentTarget.value;
  };

  @action setConfirmPassword = (event) => {
    this.confirmPassword = event.currentTarget.value;
  };

  @action setName = (event) => {
    this.name = event.currentTarget.value;
  };

  @action setCategory = (event) => {
    this.category = event.currentTarget.value;
  };

  @action setTitle = (event) => {
    this.title = event.currentTarget.value;
  };

  @action setContent = (event) => {
    this.content = event.currentTarget.value;
  };

  @action login = (dataToSubmit) =>
    new Promise((resolve, reject) => {
      this.payload = axios
        .post("/api/users/login", dataToSubmit)
        .then((response) => {
          console.log(response.data);
          return response.data;
        });
      resolve(this.payload);
    });

  //Promise객체를 반환
  @action register = (dataToSubmit) =>
    new Promise((resolve, reject) => {
      this.payload = axios
        .post("/api/users/register", dataToSubmit)
        .then((response) => {
          return response.data;
        });
      resolve(this.payload);
    });

  @action auth = () =>
    new Promise((resolve, reject) => {
      this.payload = axios.get("/api/users/auth").then((response) => {
        return response.data;
      });
      resolve(this.payload);
    });

  @action posting = (dataToSubmit) =>
    new Promise((resolve, reject) => {
      this.payload = axios
        .post("/api/posts/new", dataToSubmit)
        .then((response) => {
          return response.data;
        });
      resolve(this.payload);
    });

  @action posted = () =>
    new Promise((resolve, reject) => {
      this.payload = axios.get("/api/posts/getAllPosts").then((response) => {
        return response.data;
      });
      resolve(this.payload);
    });

  @action getPost = (dataToSubmit) =>
    new Promise((resolve, reject) => {
      this.payload = axios
        .post("/api/posts/getPost", dataToSubmit)
        .then((response) => {
          return response.data;
        });
      resolve(this.payload);
    });
}
