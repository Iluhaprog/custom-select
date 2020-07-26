For everything to work, you need to write the following lines:

1. In html file:
    ```html
    <div class="select" id="{your_id}">
        <input class="input">
        <ul class="options"></ul>
    </div>
    ```
2. In js file:
    ```javascript
    new Select({
      id: '{your_id}',
    });
    ```
  
3. Select has the following options:
  
    1) Title before select
        ```javascript
        title: 'some title'
        ```

    2) Choises
        ```javascript
        data: [];
        ```
    3) choise has folowong fields
        ```javascript
        {
          id: 1,
          value: 'some value',
          selected: 'true' // optional
        }
        ```
        
# Example: #

## HTML ##
  ```html
      <div class="select" id="select">
          <input class="input">
          <ul class="options"></ul>
      </div>
  ```
## JS ##
  ```javascript
    const select = new Select({
      id: 'select',
      title: 'cars',
      data: [{
        id: 1,
        value: 'BMW',
        selected: true,
      },
      {
        id: 1,
        value: 'AUDI',
      }]],
    });
  ```

