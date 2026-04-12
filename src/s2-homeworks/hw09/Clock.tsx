import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const [disabledButtonStart, setDisabledButtonStart] = useState(false)
    const [disabledButtonStop, setDisabledButtonStop] = useState(true)

    const start = () => {
        if(timerId) {
            clearInterval(timerId)
        }
        setTimerId(window.setInterval(() => setDate(new Date()), 1000))
        setDisabledButtonStart(true)
        setDisabledButtonStop(false)
        // setInterval(() => alert('tick'), 2000)
        // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
        // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)

    }


    const stop = () => {
        clearInterval(timerId)
        setTimerId(undefined)
        setDisabledButtonStart(false)
        setDisabledButtonStop(true)
    }

    const onMouseEnter = () => { // пишут студенты // показать дату если наведена мышка
        setShow(true)
    }
    const onMouseLeave = () => { // пишут студенты // спрятать дату если мышка не наведена
        setShow(false)
    }

    // const stringTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}` || <br/> // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
    const day = String(date.getDate()).padStart(2, '0')
    const monthDate = String(date.getMonth() + 1).padStart(2, '0')
    const year = date.getFullYear()

    const stringDate = `${day}.${monthDate}.${year}`

    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    const stringTime = `${hours}:${minutes}:${seconds}`
    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    let weekday: number = date.getDay();
    let month = date.getMonth()

    let optionsDay: Intl.DateTimeFormatOptions = {weekday: "long"};
    let optionsMonth: Intl.DateTimeFormatOptions = {month: "long"};

    const stringDay = new Intl.DateTimeFormat("en-US", optionsDay).format(date) || <br/> // пишут студенты
    const stringMonth = new Intl.DateTimeFormat("en-US", optionsMonth).format(date) || <br/>// пишут студенты
    console.log(stringDate)

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={disabledButtonStart} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={disabledButtonStop} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
