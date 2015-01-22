# meteor-reactjs

[Meteor](http://meteor.com) smart package integrating [React](http://facebook.github.io/react/) for both client and the server, to complement or replace the default [Blaze](https://www.meteor.com/blaze) templating system.

## Usage

Inside your Meteor project, add the package:
```
$ meteor add hipertracker:reactjs
```

## How it works

The package exposes a special `ReactMeteor.Mixin` object that can be used
to enable reactive data fetching for your React components.

To add the `ReactMeteor.Mixin` to a React component, simply include it in
the `mixins` class property:

```js
var MyComponent = React.createClass({
  mixins: [ReactMeteor.Mixin],

  // Make sure your component implements this method.
  getMeteorState() {
    return {
      foo: Session.get("foo"),
      ...
    };
  }
});

```
The `getMeteorState` method should return an object of properties that
will be accessed via `this.state` in the component's `render` method or
elsewhere.  Dependencies will be registered for any data accesses
performed by `getMeteorState` so that the component can be automatically
re-rendered whenever the data changes.

You can find some examples at [hipertracker/meteor-reactjs-examples](https://github.com/hipertracker/meteor-reactjs-examples).
meteor

## Credits

The source code is based on [reactjs/react-meteor](https://github.com/reactjs/react-meteor). It has been updated to the latest Meteor and React version with enabled ES6 transforms for JSX files (--harmony).
