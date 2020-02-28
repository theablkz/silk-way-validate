# silk-way-validate


###install
    npm install silk-way-validate
    

###How to use

    import Validation from 'silk-way-validate'
    Validation.validate("notNull", "some text", "error message")
    //{ isValid: true, errorText: "error message" }
    
###validators

| Validators    | Description             | Type    |   
| ------------- | ----------------------- | ------- |
| notNull       | check for empty string  | string  |
| phone         | check for valid phone number (KZ)  |   string |
| iin           | check for valid IIN (KZ)| string  |
| booleanTrue   | check for TRUE          | boolean |
| cyrillic      | check for cyrillic text | string  |

##example
    
    import Validation from 'silk-way-validate'
    let userData = [
        { id: "name", value: "Валодя", validation: "cyrillic" },
        { id: "phone", value: "+7 (777) 123 - 11 - 00", validation: "phone" },
        { id: "iin", value: "111111000222", validation: "iin" }
    ]
    userData.map(item => {
        item.valid = Validation.validate(item.validation, item.value)
    })
    
    [
      {
        id: 'name',
        value: 'Валодя',
        validation: 'cyrillic',
        valid: { isValid: true, errorText: 'messageErrorNull' }
      },
      {
        id: 'phone',
        value: '+7 (777) 123 - 11 - 00',
        validation: 'phone',
        valid: { isValid: true, errorText: 'messageNotNullPhone' }
      },
      {
        id: 'iin',
        value: '111111000222',
        validation: 'iin',
        valid: { isValid: false, errorText: 'messageErrorIin' }
      }
    ]
    
###example with require('silk-way-validate')


    const Validation = require("silk-way-validate")
    let userData = [
        { id: "name", value: "Валодя", validation: "cyrillic" },
        { id: "phone", value: "+7 (777) 123 - 11 - 00", validation: "phone" },
        { id: "iin", value: "111111000222", validation: "iin" }
    ]
    userData.map(item => {
        item.valid = Validation.default.validate(item.validation, item.value)
    })
    
    [
      {
        id: 'name',
        value: 'Валодя',
        validation: 'cyrillic',
        valid: { isValid: true, errorText: 'messageErrorNull' }
      },
      {
        id: 'phone',
        value: '+7 (777) 123 - 11 - 00',
        validation: 'phone',
        valid: { isValid: true, errorText: 'messageNotNullPhone' }
      },
      {
        id: 'iin',
        value: '111111000222',
        validation: 'iin',
        valid: { isValid: false, errorText: 'messageErrorIin' }
      }
    ]
    

##future plans

validate email, latin string and more
