import NotNull from './modules/validators/notNull'
import BooleanTrue from "./modules/validators/booleanTrue";
import Cyrillic from "./modules/validators/cyrillic";
import Iin from "./modules/validators/iin";
import Phone from "./modules/validators/phone";

class Validate {
    notNull: NotNull = new NotNull()
    booleanTrue: BooleanTrue = new BooleanTrue()
    cyrillic: Cyrillic = new Cyrillic()
    iin: Iin = new Iin()
    phone: Phone = new Phone()
}

const Validation = new Validate()
export default Validation