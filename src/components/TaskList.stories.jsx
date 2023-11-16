import TaskList from './TaskList';

import * as TaskStories from './Task.stories';

export default {
    component: TaskList,
    title:'TaskList',
    decorators:[(story) => <div style={{padding:'3rem'}}>{story()}</div>],
    tags: ['autodocs'],
}

export const Default = {
    // bring in args,
    // select tasks: create 6 different tasks taken from our TaskStories and add unique ids
    // in ascending order and unique string titles ie Task 1, Task 2 etc...
    args: {
        tasks: [
            {...TaskStories.Default.args.task, id: '1', title: 'Task 1'},
            {...TaskStories.Default.args.task, id: '1', title: 'Task 2'},
            {...TaskStories.Default.args.task, id: '1', title: 'Task 3'},
            {...TaskStories.Default.args.task, id: '1', title: 'Task 4'},
            {...TaskStories.Default.args.task, id: '1', title: 'Task 5'},
            {...TaskStories.Default.args.task, id: '1', title: 'Task 6'},
        ],
    },
};

// build a story for loading in which loading is set to true 

export const Loading = {
    args: {
        tasks:[],
        loading: true,
    },
};

export const WithPinnedTasks = {
    args: {
        tasks:[
            ...Default.args.tasks.slice(0,5),
            {id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'}
        ],
    },
};

export const Empty = {
    args: {
        ...Loading.args,
        loading:false,
    },
};

