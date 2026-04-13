import "./index.css"

const TabsComponent = props => {
  const {eachTabDetails, isActiveTab, onClickedTab} = props
  const {tabId, displayText} = eachTabDetails
  console.log(isActiveTab, 'active tab--')

  // onclick event at Tabs
  const onClickTab = () => {
    onClickedTab(tabId)
  }

  // Active tab styling
  const activeTabStyle = isActiveTab ? 'active-tab' : ''

  return (
    <li onClick={onClickTab} className={`${activeTabStyle}`}>
      <button className="tabs-items" type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabsComponent
