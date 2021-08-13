/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable array-callback-return */
import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import _ from 'lodash'
import tokenGuide from '../src/token.png'
import { landAddresses } from './Env'
import 'semantic-ui-css/semantic.min.css'

function App() {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => {
    generateAddress(data)
  }

  const generateAddress = ({token, page, type}) => {
    console.log('generating...')
    
    landAddresses.map(address => {
      let config = {
        method: 'get',
        url: `https://backend-farm.plantvsundead.com/farms/other/${address}?limit=10&offset=${(page - 1) * 10}`,
        headers: { 
          'Authorization': `Bearer ${token}`,
          'X-Forwarded-For': 'asdfgd'
        }
      }
      
      axios(config)
      .then(function (response) {
        const { data } = response
        data?.data.map(plant => {
          let icon
          if (plant.hasCrow && plant.waterStatus.needWater) {
            icon = '🦅💦'
          } else if (plant.hasCrow) {
            icon = '🦅'
          } else {
            icon ='💦'
          }
          if (type === 'crow' && plant.hasCrow) {
            console.log('%c            ', `font-size:25px; background:url('https://pvuresources.s3.ap-southeast-2.amazonaws.com/icon/plant/16_2.png') no-repeat;background-size: auto 100%`)
            console.log(`${icon}`, `https://marketplace.plantvsundead.com/farm/other/${address}`, `crow: ${plant.hasCrow}`, `water: ${_.find(plant.activeTools, { name: 'Water' })?.count}`)
          } else if (type === 'water' && plant.waterStatus.needWater) {
            console.log('%c            ', `font-size:25px; background:url('https://pvuresources.s3.ap-southeast-2.amazonaws.com/icon/plant/16_2.png') no-repeat;background-size: auto 100%`)
            console.log(`${icon}`, `https://marketplace.plantvsundead.com/farm/other/${address}`, `crow: ${plant.hasCrow}`, `water: ${_.find(plant.activeTools, { name: 'Water' })?.count}`)
          } else if (type === 'both' && (plant.waterStatus.needWater || plant.hasCrow)) {
            console.log('%c            ', `font-size:25px; background:url('https://pvuresources.s3.ap-southeast-2.amazonaws.com/icon/plant/16_2.png') no-repeat;background-size: auto 100%`)
            console.log(`${icon}`, `https://marketplace.plantvsundead.com/farm/other/${address}`, `crow: ${plant.hasCrow}`, `water: ${_.find(plant.activeTools, { name: 'Water' })?.count}`)
          } else {
            console.log('.')
          }
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    })
  }

  return (
    <div className="main-section">
      <img className="logo" src="https://pbs.twimg.com/profile_images/1409847793355657219/LQQ989bP_400x400.jpg" alt="logo" />
      <h1 style={{ textAlign: 'center' }}>PVU Link Generator</h1>
      <section className="ui container segment">
        <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label>Your Token</label>
            <input type="text" defaultValue="" {...register("token")} required />
          </div>
          <div className="field">
            <label>Page</label>
            <input type="number" min="1" name="last-name" defaultValue="1" {...register("page")} />
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input id="crow" type="radio" value="crow" {...register("type", {})} />
              <label htmlFor="crow" style={{ cursor: 'pointer' }}>Crow Only</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input id="water" type="radio" value="water" {...register("type", {})} />
              <label htmlFor="water" style={{ cursor: 'pointer' }}>Water Only</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input id="both" type="radio" value="both" defaultChecked {...register("type", {})} />
              <label htmlFor="both" style={{ cursor: 'pointer' }}>Both</label>
            </div>
          </div>
          <button className="ui button primary" type="submit">Generate Link</button>
          <p style={{ color: '#AAA' }}><small><i>* Check your browser console after pressing "Generate Link" button</i></small></p>
        </form>
        <div className="ui divider" />
        <h3>Get your token from Local Storage browser:</h3>
        <img src={tokenGuide} alt="token guide" />
        <h2>Credits:</h2>
        <div className="ui relaxed divided list">
          <div className="item">
            <i className="large bitcoin middle aligned icon"></i>
            <div className="content">
              <span className="header">Aphrogame</span>
              <div className="description">
                Donate: <a href="https://bscscan.com/address/0xc3B04a735c5cDea8e19e9858d9E4D916B14605c2" target="_blank">
                  0xc3B04a735c5cDea8e19e9858d9E4D916B14605c2
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <i className="large bitcoin middle aligned icon"></i>
            <div className="content">
              <span className="header">PakPres</span>
              <div className="description">
                Donate: <a href="https://bscscan.com/address/0xf0F16b80Ff38F882dD5b3C0Ed6ec4e06774324D7" target="_blank">
                  0xf0F16b80Ff38F882dD5b3C0Ed6ec4e06774324D7
                </a>
              </div>
            </div>
          </div>
          <div className="item">
            <i className="large bitcoin middle aligned icon"></i>
            <div className="content">
              <span className="header">alteregogi</span>
              <div className="description">
                Donate: <a href="https://bscscan.com/address/0xEde11088F435e293574Fe87aC254004F0c7a41Aa" target="_blank">
                  0xEde11088F435e293574Fe87aC254004F0c7a41Aa
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
