<p align="center"><img src="https://www.girirajdigital.com/media/pzmlmomn/best-vuejs-development-tools-giriraj-digital.png" alt="BoxBouncing"/></p>
<h1 align="center" style="color:#008ee5;">mr-vue-starter</h1>
<h3 align="center" style="color:#666666;">Start your project the easiest way</h3>
<p align="center" style="font-weight: 900">
    Highly flexible , High scalability ,Vuex , Axios ,ESlint and Prettier
</div>

This project is based on the [Vue.js](https://vuejs.org/ "Vue.js").

In this structure, we tried to bring you a good experience by combining different technologies.

## The main structure is as follows:

- **`components`**
  - **`kits`** _general ui kits_
  - **`layout`** _main layout_
- **`constants`**
  - **`endpoints`** _object of endpoints services_
- **`helpers`** _custom javascript helpers_
- **`utils`** _custom javascript utils_
- **`router`** _main vue router_
- **`modules`** _viewModels and Views of pages_
- **`app`** _Vuex repository and controllers for every main screen_

## Installation:

Assuming that you have [Node 20 LTS](https://nodejs.org/en/download/ "Node 20 LTS") or greater installed, you can use npm to install the Expo CLI command line utility:

_Install eslint, prettier and editor config plugins into your IDE_

1. `git clone https://github.com/MostafaRastegar/mr-vue.git`

2. `cd mr-vue`

3. `npm install` or `yarn`

4. `npm run serve` or `yarn serve`

## Document:

### App structures:

You create a folder for each main part of the Vuex state, for example, the users' folder used in the Vuex store.

#### Users structures:

- **app**
  - **users**
    - **actions**
    - **getters**
    - **interfaces**
    - **mutations**
    - **services**
    - **state**
    - **types**

#### Introducing types:

Includes an object of all prefix types used in Users actions. Here are three types of typing for each request:

**REQUEST, SUCCESS, FAILURE**

    const types = {
    ...
      POST_USERS: 'POST_USERS',
    ...
    };

#### Introducing actions:

Includes an object of all actions used in users side effects
Here are three types of action for each request:
**request, success, failure**

Naming actions are based on what they want to do. For example, when requesting we use get, post, which affects the action name.
To make it easier to use the actions in different parts of the project, the 'actionTemplate' helper has been used, in which case each action determines which type it belongs to. And when calling it, you no longer need to repeat your self request handling

```
....
  actionTemplate({
    commit: context.commit,
    service: () => usersServices.postUsersService(body),
    type: types.POST_USERS,
    resolve: (data: PostRegisterResult) => {
      Cookies.set(ACCESS_TOKEN, data.user.token);
      router.push("/articles/page/1");
    },
    reject: (error: Error) => {},
  }),
....

```

#### Introduction of mutations:

mutations determine the structure of each part of our store. We have here for each request three main parameters
**loading, data, error**

Consider that it responds to requests based on the response it receives from the server.

```
export default {
  ...mutationsGenerator<Users>(types.POST_USERS, "register"),
};


```

#### Introducing getters:

getters is an object that is responsible for getting data from the store. For example, if you need to read users' data at any time.
You use the following function:
`getLoginData`

The naming of this function has three main parts.
**get**: which always comes first in all the values ​​of this object.
**name**: The name of the item mentioned in the store, for example, Users
**Content-type**: which can be **'data', 'loading'**, and other items.

#### Introduction of services:

Services is an object that lists the requests that are to be made. And we get the **'get', 'post'** operation based on the endpoints we have using **Axios**.
From now on to request. It is enough to call the function of that request from this section.

## USAGE:

#### How to dispatch action request and get data from the store in a component:

Here we are on the track **~/modules/login/login.vm.ts**
We created a viewModel setup to handles view component sideEffects.

First, we import **userActions** objects from the '@/app/users/actions'.

In the **setup** component, we call a function related to the desired request.

```
  const postUsersLoginRequest = async () => {
    const requestBody = {
      user: {
        email: email.value,
        password: password.value,
      },
    };
    await store.dispatch(userActions.postUsersLoginRequest, requestBody);
  };
```

All steps of extracting to store data in **the store** are handled by **actions**.

_For read the new data from the store_, just call the corresponding **getters**.

**for example:**

```
  const loading = computed(() => {
    return store.getters.getLoginResponse.loading;
  });
```

Finally, after loading is **'false'**, you can display the list of users.

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
