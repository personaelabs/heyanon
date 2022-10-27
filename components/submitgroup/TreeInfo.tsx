import { FunctionComponent } from "react";

export const TreeInfo: FunctionComponent<{ treeDetails: TreeDetails; }> = ({ treeDetails }) => {
    return (
        <>
            <div className='flex justify-center my-10'>
                Generated tree for groupId: {treeDetails.groupId}
            </div>
        </>
    );
};
