import { useParams } from "react-router";
import UpdateDetails from "./UpdateDetails";
import { useState } from "react";

const ViewEmployee = ({ employees, setEmployees }) => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const employee = employees?.find((employee) => employee.id == id);
  const { name, gender, age, emailId, phone } = employee;
  const maleImage =
    "data:image/png;base64,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";
  const femaleImage =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAvAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABAcFBgECAwj/xAA9EAABAwMBBAcGBgAEBwAAAAABAAIDBAURIQYSMUEHFFFhcYGREyIyobHBIzNCUmJyFjTR8BVDU3OCouH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBQT/xAAhEQEBAAICAwEBAQEBAAAAAAAAAQIRAzEEEiFBIjIjE//aAAwDAQACEQMRAD8AvFERAREQEREBcZXnLK2Ma8exQZah8mmd1vYFMitykTZKmNhwXZPYFHfWk6MaB3lREVtK+1exqpT+rC6+3l/efVeTnBjS55DWjUudoB5rHyX6zxPLH3SjDhxHtgcKLZESZXplhUTD9ZXdtZIOOD4hY2luNDWHFLWU8x7I5Wk+ilHT/wCqfl6p/U7TmVrD8bS35qSx7XjLSCO5YhctcWnLSQe5RpMzZhFDhqwcNk071LByqryyuURESIiICIiAiIgIiICj1FQIxut1efku1RMIm55ngFjSS45OpKmTamWQ9xe7eJ1XBRFfWlDmtR2q23pLQXUlAG1VaNH6+5F4nme4ea69IO0rrTSigopN2rqWZLx/yo+3xPD1VUZznv4ryc/Pcb64vb4/je39ZJt1u9wu8pkuFVJMCciMnDG+DRp58VCwOweiIvDbb26EknTjA7Fsdi2yu9oe1rpnVdN/0Z3kkf1dxH0WuopxyuPSMsMcvli9bFe6K+0ZqaF+S04kido+N3YR91klQ9jutRZLjHW0pPu6PZykbzB/3oVeFurYbjQw1lMd6GZgcwnj59/FdHg5veavbl+Rw/8AlfnSQvenqDEQHas+i8EWzzy6Zdrg4AjUFdljaWf2bt13wn5LIg6aKtjWXblERQkREQEREBdXENBJ4ALsolfJhoYOfHwUxFqJLJ7V5d2LoiK7IXSeaOnhkmlduxxtL3HuC7rVekqv6lsy+FpIkrJGwjHZq53yBHmq55euNq2GPtlIq68XCS63Spr5c5mfvAE/C3gB6YUNEXIt3du3JqaERFCRE7OwqVS0EtRHFIInF9QdyliHGQ8C/uaO3t8FIiqyuim479JWW6R2fZOEsQPIO+L5j5lV9c6N1vuE1G54e6EhpcBoTgH7rJ7FXH/hu01HI8kRzPEMng/Qejt0+q04svXOVjz4e/HYutERdVxxTqKXeaWE6jgoK7Rv3Hhw5FRYmXVZdFwCCARzXKo1EREBCiIOFi6h+/M89hwFkpDusJ7AsSeJVsVMhERWUFW3SzUl1XbqbPutjfIR3kgfb5qyVVfSoSb/AE/Z1YY9SvP5N1xvR4s3yRphTzRbBs5stPeYusTSdXpM6P3cuk/qOzvXNdZr6k0NvrLhL7OhpZJ3fxGjfE8B5qxqHY+z0hBdC+ocOc7sj0GAs7FGyGIRQsbHGODWNwAo2nTR6LZOChDH3Iddq3j8OiiPunvef2jmTgcOPA7NarSKWWSsqXCSulABeG4bE3kxg/S0LJRxtjLi0au+I8yuybNK129oXU18NQGkR1TQ8O7wMEfRa3nB3hkEaq19q6COvsdQJG5dE0yRHmHBVOdWn7qZUXp9BUcpno4Jzxkja8+YBXso9vjMVvpI3cWwsafENCkLszpwr3RERShkKJ+9CAeLThSVBoDh7m9ynKlay/BERQkREQeVUcQO8Fi+SydX+Q/wWMVsVMhERWUFV/SszF3on/upsf8AsVaHgq56W48S2yXtbI30LT91h5M3x16PFv8A1jQIKd9bWU1HH8U8rY/AEgE+XHyV0QQR00McELA2OIBrGjkAqn2U3f8AFtr3zgb7seO47CtxczJ1oIiKiwiIg6TgGGT+p+iqu4NbW7TwwNaB7WeCDQcXHdaT6n5K0qyRsVJNI4+61hJ9FV+yeKva62udqXVXtPMbzvstOP7lFM7rGruIA4cOSJzRdlwuxERB70R/HHgsksbRfnhZJUyaY9CIihYREKDzqBmF47liuSzBGViHjde5vYcK2KmThERWUPJV70tzR7lrgH5gMj9OTdB8z9FYLnNa0ueQ1o1JccADtVN7ZVFZdK112fTyx290nV6V8jd0uABOcHXXBPpzXn8nLWGnq8THfJtr9PUPoq+krWamCZrz3gHJHmM+qupj2SMbJGQWOAc09oKpF7d9haThWD0e3vrVG611DiKilblhP64+HqOHhhc2/Y6k7beiIqLCIuJHCKNz3nDWjecewDVBrO313FutPVo/8zVZa3+LR8R+g81oVlrDa7nQ1rR/l5mOOebQfeHmM+qXy7Pv13fWlpbEPdhYT8LeWe/mV5UrYnVULah7mwOka2RzeLWk6kd4GVpPmmd+y7fQDHMe1r43bzSMtcOYPNdli9naCqtdvFDVVMdVHEcU8rQWks5Bw7R2hZRdjH7I4uU1dQREUqpNAPxvBqyCh0Dfdc/tOFMVK0x6ERFCwiIg4woFczdl3uRCyC8qmP2sRbz4hTEWbjFomo0KcgR2ZV2ThwDmlrgCCMEFVb0oXQVV0it0Tsx0YJf/ANx3+gx6rb9ptr7faKWVlLUwz3EDDIWO3twnm7sHiqde98r3SySGR7yXOeTkuJOpXk8rP56x7vD4rb7Vws7sFvf4jkc0nSndnwy1YLhqeC2vo5iaX3CpJ98lkYHY3U58z9F4PyuhP9Rv0c4cAHkAr1BB4EYUDTmE8FltrcU1z2tGpWPucjn0NUGZ/Jfjx3Su/jqmM6YznTCbPX4punbiFvaWhenJdnMbE50bDvNYS1p7QOBXC1vbH8XDsBfBd7K2KR4NVSARyjmW8Gu88Y8QtmVeWTbjZwTQvuUD6O4sibE+q9llsunMs15fqC3ugrqS404qLfUxVMLuEkTw4H0XW47/ADHH5f8AVSERSKOPfkyfhbqVfbKfamwM9nE1vPGq7rlFRsIiICIiAuFyiDF3V0NHDLVzyNigYC6R7jgMHaqR2v2+rr1LJTWxz6S3AkDd0kmHa48QO4efdflVTw1UEkFTE2SGRpa9jhkOB5FfP/SDsTUbL1hqKcOmtMzsRy84T+x32PP6yr6ztqLQT7rdMngsm1oa0BvAKFStHtC9xADe1d5qrDSIgSRzPBePmlzy1i93BlMMfbJ7yHe9xvPiVtGwMwjuM9PnSSLI7y0/6ErUKGQyRv39SHLYdkKxlBtLb55t0xGURvBGdHe791ecE9Lj+qXyP79p0slFts1koZPebGWH+Dvso7tnKfiJpB3aLyXxeT8eueZx/rWlGudR1W3VU/OOJzh440+a3BmztID78kru7gtX6UuqWrZjq8EbWy1crYwTxwNTr5K+Hi5b3Vc/Mw1qKfboAOOF2XXTkokNbl7g8e7vYBHJa83Dv7ix4OfXzJ2rWYLX47iubXcq201YqrdUyU8w4lh0d3EcCvWQCWFwa4HmFDpaeasqYqalifNPI4NjjYMlxWnBlbjqsvIxku4u7YPbGPaeLq1RGyC5xj342/DIP3N+45LfoYxHEG8e3C0/o52Jj2XozUVm7JdJ2/iOGoiH7Gn6nn6LdOS3288mnKIiJEREBERAREQFHqqWGtppKaribNDI0tfG8ZDh4KQiCj9uOjGrtbpK+wsfVUPxOp+MsXh+4fMd6roar61K1Hajo9sm0Dn1Bh6nWv41EAAL/wCw4O8ePeg+e6Els7mHg4LIHXmQeRHJZ6/9Gm0lkm6xSUwuVOzX2lNq/HfHxz/XeWBw5p3ZYnwv5xyNLXDyKD6J2RuYvGztDXab74gJAOTxo75grMqqeh29NjlqbPM/G/8AjQg9vBw+h81ayDgqlul26dd2jjomHMVFEA7B/W7U+g3fUq3bxXw2y21FbUO3Y4Iy4nyXzjX1cldWz1dQ78SaQvdk9qCLM/dhe7sCxkYwzms3TWS83x/V7RbKqoafikazdYP/ADdhvzVg7NdEGNybaKraca9WpTp5vwPkAgrnZ6y3K/V3VbRA+WQfmP4MjH8jy+qvTYfYah2Xh9s4ipuUg/FqC3GP4sHIfMrYrXbKK00jKS20sVNTs4RxNwPHvPepijSd0CIilAiIgIiICIiAiIgIiICIiDqeKj1tuoq5m7W0kM44fiMDkRBiIdjLBT1sNbSUDaeeJ28x0LywZweQOOZWwAYREEC82ijvVL1O4MdJAXBxY15bkjhnHJRKHZWw2/D6W1UrX/uMYcfmiIMy1rQAGgADgBwC55oiDlERAREQEREBERB//9k=";

  const handleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleUpdate = (formData) => {
    const updatedEmployeesInfo = employees?.map((employee) => {
      if (employee?.id === formData?.id) {
        return { ...formData };
      }
      return employee;
    });
    setEmployees(updatedEmployeesInfo);
  };

  return (
    <div className="max-w-3xl flex items-center text-center mt-4 mx-auto">
      <div className="w-full flex flex-col justify-center items-center px-2 mt-4 gap-4">
        <h1 className="text-3xl font-bold">Employee Details</h1>
        <div className="min-w-2xl flex justify-around items-center mt-4">
          <img src={gender === "Male" ? maleImage : femaleImage} alt="" />

          <div className="flex flex-col items-start text-left my-4 gap-6">
            <p className="text-xl font-medium">
              Name: <span className="px-2">{name}</span>
            </p>
            <p className="text-xl font-medium">
              Gender: <span className="px-2">{gender}</span>
            </p>
            <p className="text-xl font-medium">
              Age: <span className="px-2">{age}</span>
            </p>
            <p className="text-xl font-medium">
              Email Id: <span className="px-2">{emailId}</span>
            </p>
            <p className="text-xl font-medium">
              Phone No: <span className="px-2">{phone}</span>
            </p>
          </div>
        </div>
        <button
          className="px-4 py-4 bg-blue-700 rounded-lg text-white text-xl font-medium cursor-pointer"
          onClick={handleModal}
        >
          Update Details
        </button>
        {showModal && (
          <UpdateDetails
            employee={employee}
            handleUpdate={handleUpdate}
            setShowModal={setShowModal}
          />
        )}
      </div>
    </div>
  );
};

export default ViewEmployee;
