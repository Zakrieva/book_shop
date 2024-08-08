

const Input = ({ products, setProducts, value, setValue, filterArr }) => {

    return (
        <div>
            <input
                type="text"
                placeholder="Название книги"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>

    );
};

export default Input;