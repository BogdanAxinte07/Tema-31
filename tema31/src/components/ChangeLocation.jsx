import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export function ChangeLocation(props) {
  //primim de la parinte functia care actualizeaza state-ul sectiunii.
  const { setCurrentLocation } = props;

  //cand dam click pe un element al dropdownului, actualizam staeul parintelui cu orasul curent.
  function changeSelectedCity(city) {
    setCurrentLocation(city);
  }

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Alege orasul
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => changeSelectedCity('Bucuresti')}>
            Bucuresti
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeSelectedCity('Cluj')}>
            Cluj
          </Dropdown.Item>
          <Dropdown.Item onClick={() => changeSelectedCity('Brasov')}>
            Brasov
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
