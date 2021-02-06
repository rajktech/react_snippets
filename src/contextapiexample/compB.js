import CompC from './compC';
const CompB = (props) => {
    return (
        <>
        <div>=>This is component B</div><br/>
        <CompC passedname={props.passedname} />
        </>
    );
}
export default CompB;