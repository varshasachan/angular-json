import { FoodNode } from "./model/tree.model";

export const TREE_DATA: FoodNode[] = [
    {
      name: 'Folder1',
      children: [
        { name: 'File1' },
        { name: 'File2' },
        { name: 'File3' },
      ]
    }, {
      name: 'Folder2',
      children: [
        {
          name: 'SubFolder1',
          children: [
            { name: 'File4' },
            { name: 'File5' },
          ]
        }, {
          name: 'SubFolder2',
          children: [
            { name: 'File6' },
            { name: 'File7' },
          ]
        },
      ]
    },
  ];
  
  