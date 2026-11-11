import { Request, Response } from 'express';
import { events, EventItem } from '../data/events';


export const getEvents = (req: Request, res: Response) => {
  const { category } = req.query;
  
  const list = category
    ? events.filter((e) => e.category === category)
    : events;

  res.status(200).json(list);
};

export const getEventById = (req: Request, res: Response) => {
  const { id } = req.params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    return res.status(404).json({
      error: { message: "Event not found" }
    });
  }

  res.status(200).json(event);
};


export const createEvent = (req: Request, res: Response) => {
  const { title, category, capacity, date, time, location, description } = req.body ?? {};


  if (!title || !category || !date) {
    return res.status(400).json({
      error: { message: "title, category and date are required" }
    });
  }

  const newEvent: EventItem = {
    id: `event-${Date.now()}`,
    title,
    category,
    date,
    capacity: Number(capacity) || 0,
    time: time ?? "",
    location: location ?? "",
    description: description ?? ""
  };

  events.push(newEvent);
  res.status(201).json(newEvent);
};