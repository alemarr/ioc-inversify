import 'reflect-metadata';
import DatabaseStorage from "../../../../src/infrastructure/database/database-storage";
import MemoryStorage from "../../../../src/infrastructure/database/memory-storage";

type PostRecord = {
    id: number;
    title: string;
    description: string;
}

describe('In-memory storage', () => {
    let storage: DatabaseStorage;

    beforeEach(() => {
        storage = new MemoryStorage();
    });

    it('Store one post', () => {
        const post = storage.insert({
            title: 'Test',
            description: 'Description'
        });

        const posts = storage.fetchAll();

        const firstRecord: PostRecord = posts[0];

        expect(post.id).toBeDefined();
        expect(post.id).toBe(1);
        expect(posts.length).toBe(1);
        expect(firstRecord.title).toBe('Test');
    });

    it('Store two posts', () => {
        storage.insert({
            title: 'One',
            description: 'Description'
        });
        storage.insert({
            title: 'Two',
            description: 'Description'
        });

        const posts = storage.fetchAll();

        const firstRecord: PostRecord = posts[0];
        const secondRecord: PostRecord = posts[1];

        expect(posts.length).toBe(2);
        expect(firstRecord.title).toBe('One');
        expect(secondRecord.title).toBe('Two');
    });
});