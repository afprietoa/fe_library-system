const FormRowSelect2 = ({labelText, name, value, handleChange, list, property}) => {
    return (
          <div className="form-row">
              <label htmlFor={name} className="form-label">
                {labelText || name}
              </label>
              <select 
                name={name} 
                id={name}
                value={value}
                onChange={handleChange} 
                className="form-select">
                  {list.map((item, index)=>{
                    console.log(item);
                    console.log(property);
                    console.log(item[property]);
                    return (<option key={index} value={item}>
                      {item[property]}
                      </option>);
                  })
  
                  }
                </select>
          </div>
    )
  }
  
  export default FormRowSelect2