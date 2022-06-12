import { render, fireEvent, screen } from "@testing-library/react";
import Login from "./Login";
import Counter from "./Login";

test("champ mail", () => {
    // render the component on virtual dom
    render(<Login />);
    const mail = screen.getByTestId("email");

    fireEvent.change(mail ,{target: {value:'bbouquoyoue@gmail.com'}})
    expect(mail.value).toBe('bbouquoyoue@gmail.com')
});