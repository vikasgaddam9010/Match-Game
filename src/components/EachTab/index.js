import './index.css'

const EachTab = props => {
  const {each, tabsList, passTabId, isTabActive} = props
  const cssSelector = isTabActive ? 'select-css' : ''
  const btnBottom = isTabActive ? 'btn-bottom' : ''
  const onClickToGetTabId = () => {
    const {tabId} = each
    passTabId(tabId)
  }
  return (
    <li className="each-li">
      <button onClick={onClickToGetTabId} className={`${btnBottom} btn-li`}>
        <h1 className={cssSelector}>{each.displayText}</h1>
      </button>
    </li>
  )
}
export default EachTab
