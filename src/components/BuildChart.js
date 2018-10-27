import React from 'react'

function BuildChart({weight, height, onChange}) {
  return (
    <div>
      <div>
        <label>Weight</label>
        <input name="weight" value={weight} onChange={onChange} type="number" pattern="\d*"></input>
      </div>
      <div>
        <label>Height</label>
        <select name="height" value={height} class="custom-select" required>
              <option value="">Height</option>
              <option value="4'8">4'8</option>
              <option value="4'9">4'9</option>
              <option value="5'0">5'0</option>
              <option value="5'1">5'1</option>
              <option value="5'2">5'2</option>
              <option value="5'3">5'3</option>
              <option value="5'4">5'4</option>
              <option value="5'5">5'5</option>
              <option value="5'6">5'6</option>
              <option value="5'7">5'7</option>
              <option value="5'8">5'8</option>
              <option value="5'9">5'9</option>
              <option value="5'10">5'10</option>
              <option value="5'11">5'11</option>
              <option value="6'0">6'0</option>
              <option value="6'1">6'1</option>
              <option value="6'2">6'2</option>
              <option value="6'3">6'3</option>
              <option value="6'4">6'4</option>
              <option value="6'5">6'5</option>
              <option value="6'6">6'6</option>
              <option value="6'7">6'7</option>
              <option value="6'8">6'8</option>
              <option value="6'9">6'9</option>
              <option value="6'10">6'10</option>
            </select>
      </div>
      <div>
        <button>Check</button>
      </div>
    </div>
  );
}

export default BuildChart;