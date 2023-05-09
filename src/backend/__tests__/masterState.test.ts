import componentActionRecord from '../models/masterState';

describe('Master State unit tests', () => {
  describe('componentActionRecord unit tests', () => {
    const component1 = { state: 'dummy state', props: {} };
    const component2 = { state: 'dummy state2', props: {} };
    const component3 = { state: 'dummy state3', props: {} };
    let index1, index2, index3;
    beforeEach(() => {
      componentActionRecord.clear();
      index1 = componentActionRecord.saveNew(component1);
      index2 = componentActionRecord.saveNew(component2);
      index3 = componentActionRecord.saveNew(component3);
    });

    describe('clear', () => {
      it('should clear componentActionsRecord', () => {
        componentActionRecord.saveNew(component1);
        componentActionRecord.clear();
        expect(componentActionRecord.getAllComponents()).toEqual([]);

        componentActionRecord.saveNew(component2);
        componentActionRecord.saveNew(component3);
        componentActionRecord.clear();
        expect(componentActionRecord.getAllComponents()).toEqual([]);
      });
    });

    describe('saveNew', () => {
      it('should add a new component to componentActionRecord and return its index', () => {
        expect(index1).toEqual(0);
        expect(index2).toEqual(1);
        expect(index3).toEqual(2);

        expect(componentActionRecord.getAllComponents()).toHaveLength(3);

        expect(componentActionRecord.getAllComponents()[index1]).toBe(component1);
        expect(componentActionRecord.getAllComponents()[index2]).toBe(component2);
        expect(componentActionRecord.getAllComponents()[index3]).toBe(component3);
      });
    });

    describe('getComponentByIndex', () => {
      it('should return the component at the specified index', () => {
        expect(componentActionRecord.getComponentByIndex(index1)).toBe(component1);
        expect(componentActionRecord.getComponentByIndex(index2)).toBe(component2);
        expect(componentActionRecord.getComponentByIndex(index3)).toBe(component3);
      });

      it('should return undefined when passed an index that does not exist', () => {
        expect(componentActionRecord.getComponentByIndex(3)).toBeUndefined();
      });
    });

    describe('getComponentByIndexHooks', () => {
      it('should return the components at the specified indices', () => {
        expect(componentActionRecord.getComponentByIndexHooks([index1])).toContain(component1);
        expect(componentActionRecord.getComponentByIndexHooks([0, 1, 2])).toEqual([
          component1,
          component2,
          component3,
        ]);
      });

      it('should return undefined when passed an empty array', () => {
        expect(componentActionRecord.getComponentByIndexHooks([])).toEqual([]);
      });

      it('should return undefined when passed an index that does not exist', () => {
        expect(componentActionRecord.getComponentByIndexHooks([3])).toEqual([]);
      });
    });

    describe('getAllComponents', () => {
      it('should return all components in componentActionRecord', () => {
        expect(componentActionRecord.getAllComponents()).toEqual([
          component1,
          component2,
          component3,
        ]);
      });
    });
  });
});
