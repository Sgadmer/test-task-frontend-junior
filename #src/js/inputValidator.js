export default function inputValidator(areWhitespacesOnly, symbolsLimit) {
    return (
        (e) => {
            const mainValidEXP = /[^a-zA-Zа-яА-Я\s\.]/gm;
            const whitespacesValidEXP = /\s{2,}/gm;
            const allWhitespacesValidEXP = /\s/gm;
            const dotsValidEXP = /\.{2,}/gm;
            let input = e.target;
            let inputValue = input.value;
            let inputLength = inputValue.length;
            input.classList.remove('input-error');
            if (!areWhitespacesOnly) {
                inputValue =
                    inputValue
                        .replace(mainValidEXP, "")
                        .replace(whitespacesValidEXP, " ")
                        .replace(dotsValidEXP, '.');
            } else {
                inputValue =
                    inputValue
                        .replace(allWhitespacesValidEXP, "");
            }
            if (inputLength > symbolsLimit) {
                inputValue =
                    inputValue
                        .slice(0, symbolsLimit);
            }
            if (e.type == 'blur') {
                inputValue =
                    inputValue
                        .trim();
            }
            if (inputValue == '') {
                input.classList.add('input-error');
            }

            input.value = inputValue;

        }
    )
}