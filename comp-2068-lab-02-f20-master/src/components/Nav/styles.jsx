import styled from 'styled-components';

export default {
  Nav: styled.nav`
    background: #000000;
    display: flex;
    align-items: center;
    height: 60px;

    ul {
      display: flex;
      padding: 0;
      margin: 0;

      li {
        list-style: none;

        a {
          color: #cb0ff1;
          text-decoration: none;
          padding: 1em;
          transition: 0.5s;

          &:hover {
            color: #f312f3;
          }
        }
      }
    }
  `
};